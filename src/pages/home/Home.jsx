import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeroSection from '../../component/shared/HeroSection';
import Card from '../../component/Card';
import SortBy from '../../component/shared/SortBy';
import FilteredBy from '../../component/shared/FilteredBy';
import SearchInput from '../../component/shared/SearchInput';

export default function Home() {
  const [topicsData, setTopics] = useState('');
  const [viewTopics, setViewTopics] = useState('');
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const [filterOption, setFilterOption] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://tap-web-1.herokuapp.com/topics/list?phrase=${search}`
        );
        const topics = await response.data;

        setTopics(topics);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [search]);

  useEffect(() => {
    if (setTopics) {
      let categories = new Set();
      if (topicsData) {
        topicsData?.forEach((topic) => categories.add(topic.category));
      }

      setFilterOption([
        { title: 'Default', value: '' },
        ...[...categories].map((option) => ({ title: option })),
      ]);

      let updatedTopics = [...topicsData];
      if (sortBy) {
        updatedTopics.sort((a, b) => {
          switch (sortBy) {
            case 'topic':
              return a['topic'] < b['topic'] ? -1 : 1;

            case 'name':
              return a['name'] < b['name'] ? -1 : 1;

            default:
              throw `error`;
          }
        });
      }

      if (filterBy) {
        updatedTopics = updatedTopics.filter(
          (topic) => topic.category === filterBy
        );
      }

      setViewTopics([...updatedTopics]);
    }
  }, [sortBy, filterBy, topicsData]);

  return (
    <>
      <HeroSection />

      <main className="content-body">
        <div className="content-container">
          <div className="search-box">
            <SearchInput onChange={(e) => setSearch(e.target.value)} />
            <div className="menu-list">
              <SortBy onChange={(e) => setSortBy(e.target.value)} />
              <FilteredBy
                onChange={(e) => setFilterBy(e.target.value)}
                filterOption={filterOption}
              />
            </div>
          </div>
          <h2 className="no-topic">{viewTopics?.length} Web Topics Found</h2>
          <div className="cards">
            {loading
              ? 'Loading...'
              : viewTopics?.map((topic) => {
                  return (
                    <Card
                      key={topic.id}
                      id={topic.id}
                      name={topic.name}
                      image={topic.image}
                      category={topic.category}
                      topic={topic.topic}
                      ratings={topic.rating}
                    />
                  );
                })}
          </div>
        </div>
      </main>
    </>
  );
}

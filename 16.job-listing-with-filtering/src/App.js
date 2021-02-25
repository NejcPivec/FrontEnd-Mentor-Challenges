import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./assets/data.json";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  // Get all the tags
  const allTags = ({ role, languages, level, tools }) => {
    const tags = [role, level];

    if (filters.length === 0) {
      return true;
    }

    if (tools) {
      tags.push(...tools);
    }

    if (languages) {
      tags.push(...languages);
    }

    return tags.some((tag) => filters.includes(tag));
  };

  const filteredJobs = jobs.filter(allTags);

  // Get the name of clicked tag and put it in filters array
  const tagClick = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag]);
    }
  };

  // Clear button - clears everything
  const clearFilter = () => {
    setFilters([]);
  };

  // X-clear - clears only selected one(v filtru postimo vse razn tega k je klikn)
  const filterTag = (filter) => {
    setFilters(filters.filter((oneFilter) => oneFilter !== filter));
  };

  return (
    <div className="App">
      <header className="header"></header>
      {filters.length > 0 && (
        <div className=" container search-card">
          {filters.map((filter, index) => (
            <span className="clicked-tag" key={index}>
              {filter}{" "}
              <span className="tag-x" onClick={() => filterTag(filter)}>
                x
              </span>
            </span>
          ))}
          <button className="clear-tags" onClick={() => clearFilter()}>
            Clear
          </button>
        </div>
      )}
      {filteredJobs.map((job) => (
        <JobCard job={job} key={job.id} tagClick={tagClick} />
      ))}
    </div>
  );
}

export default App;

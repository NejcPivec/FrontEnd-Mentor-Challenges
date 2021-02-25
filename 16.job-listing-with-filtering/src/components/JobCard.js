import React from "react";

const JobCard = ({ job, tagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }
  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div className={`container card flex ${job.featured && "card-border"}`}>
      <div className="flex-row">
        <div>
          <img src={job.logo} alt="logo-icon" className="logo" />
        </div>
        <div className="flex-col credentials">
          <div className="flex-row">
            <span className="company">{job.company}</span>
            <span>
              {job.new ? <span className="tag new-tag">New!</span> : ""}
            </span>
            <span>
              {job.featured ? (
                <span className="tag featured-tag">Featured</span>
              ) : (
                ""
              )}
            </span>
          </div>
          <h3>{job.position}</h3>
          <small>
            {job.postedAt} · {job.contract} · {job.location}
          </small>
        </div>
      </div>

      <div className="flex-wrap person-job">
        {tags.map((tag, index) => (
          <span
            className="person-tags"
            key={index}
            onClick={() => tagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;

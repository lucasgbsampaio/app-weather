import React from 'react';

export default function Content({ data, customizeData }) {
  if (data) {
    return (
      <div>
        <span>{data.temp}</span>
      </div>
    );
  }
  return (
    <div>
      <span>{customizeData.temp.day}</span>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { link } from 'fs';

const ResourceList = ({ resource }) => {
  const [resources, setResources ] = useState([]);
  //useEffect as lifeCycle methods cdm and cdu
  const fetchResource = async resource => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data);
  }
  //this arr is like prevProps first check it if had change that http run
  //if put no arr as sec func always call like spam
  useEffect(()=> {fetchResource(resource)}, [resource]) //can user iiFe
  return (
    <ul>
      {
        resources.map(record =>
          <li key={record.id}>{record.title}</li>)
      }
    </ul>
  );
}

export default ResourceList;
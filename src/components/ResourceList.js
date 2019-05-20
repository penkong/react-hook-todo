import React, { useState, useEffect } from 'react';
import axios from 'axios';
//reusability
const useResources = resource => {
  const [resources, setResources] = useState([]);  //useEffect as lifeCycle methods cdm and cdu
  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data);
    })(resource)
  }, [resource]) //can user iiFe
  return resources;
}
//main comp
const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record =><li key={record.id}>{record.title}</li>)}
    </ul>
  );
}

export default ResourceList;
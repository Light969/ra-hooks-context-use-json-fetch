import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import PropTypes from 'prop-types';

export function Data({ endpoint, title }) {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}${endpoint}`);

  return (
    <div>
      {title}: {(loading && 'Загрузка...') || (data && data.status) || (error && 'Ошибка!')}
    </div>
  );
}

Data.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
'use client';
import React, { useEffect, useState } from 'react';
import Item from '../TestItem/TestItem';
import styles from './TestList.module.css';
import { DataItem } from '@/types/types';

const TestList = () => {
  const [data, setData] = useState<DataItem[]>([]);

  const handleQuestionClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const listItem = target.closest('li');

    if (listItem) {
      const questionId = listItem.id;
      const updatedQuestions = [...data];
      const index = updatedQuestions.findIndex((q) => q.id === questionId);

      if (index !== -1) {
        updatedQuestions.splice(index, 1, {
          ...updatedQuestions[index],
          isActive: !updatedQuestions[index].isActive,
        });
      }

      setData(updatedQuestions);
      sessionStorage.setItem('data', JSON.stringify(updatedQuestions));
    }
  };

  useEffect(() => {
    const LSData = sessionStorage.getItem('data');

    const fetchData = async () => {
      const res = await fetch('/mock-data.json');
      const data: DataItem[] = await res.json();

      if (LSData && JSON.parse(LSData).length > 0) {
        setData(JSON.parse(LSData));
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    return () => {
      sessionStorage.setItem('progress', JSON.stringify(data.filter((item) => item.isActive).length));
      sessionStorage.setItem('amount', JSON.stringify(data.length));
    };
  });

  return (
    <ul onClick={handleQuestionClick} className={styles.testList}>
      {data?.length > 0 &&
        data.map((item) => <Item id={item.id} key={item.id} value={item.value} isActive={item.isActive} />)}
    </ul>
  );
};

export default TestList;

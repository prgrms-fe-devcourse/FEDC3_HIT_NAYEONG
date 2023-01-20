import { useEffect, useState } from 'react';

import { Category } from '@/types/category';
import { ExtractedReviewPosterType } from '@/types/review';

import { getCategory } from '@/Api/category';
import { getSpecifiedReviewPoster } from '@/Api/reviewPoster';
import {
  extractValidCategory,
  setCategoryNameAndIdStateToLocalStorage,
} from '@/utils/category';
import { extractRecommendReviewPoster } from '@/utils/review';

type HITAllDataType = {
  category: Category[];
  specifiedPoster: Omit<ExtractedReviewPosterType, '_id'>[];
};

const useFetchHIT = () => {
  const [data, setData] = useState<HITAllDataType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const run = async () => {
      try {
        const [categoryResponse, reviewPosterResponse] = await Promise.all([
          getCategory(),
          getSpecifiedReviewPoster(),
        ]);

        setData({
          category: extractValidCategory(categoryResponse),
          specifiedPoster: extractRecommendReviewPoster(reviewPosterResponse),
        });
        setCategoryNameAndIdStateToLocalStorage(categoryResponse as Category[]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return { data, loading };
};

export default useFetchHIT;

import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TopicItem from '../Topic/Topic';
import Footer from './footer/footer';
import Writer from './writer/writer';

function InitCategories() {
  const categories = [
    { name: 'E-learning', link: '#' },
    { name: 'Cryptocurrency', link: '#' },
    { name: 'Accessibility', link: '#' },
    { name: 'Family', link: '#' },
    { name: 'Science', link: '#' },
    { name: 'Education', link: '#' },
    { name: 'Covid-19', link: '#' },
  ];
  return categories;
}

const Sidebar = props => {
  const categories = InitCategories();
  const writers = [
    {
      name: 'Captain America',
      description:
        'Captain America is a superhero appearing in American comic books.',
      avatar:
        'https://cafebiz.cafebizcdn.vn/thumb_w/600/2019/photo1557224364584-1557224364877-crop-15572243735951912688033.jpg',
      href: '@john',
    },
    {
      name: 'Thor',
      description:
        'Thor Odinson, or simply Thor is a fictional character appearing in American comic.',
      avatar:
        'https://ss-images.saostar.vn/pc/1594175247996/avengers-endgame-thor-feature.jpg',
      href: '@john',
    },
    {
      name: 'Iron Man',
      description:
        'Iron Man is a superhero appearing in American comic books published by Marvel Comics',
      avatar:
        'https://media.vov.vn/sites/default/files/styles/large/public/2020-11/1-1605511846508372305113.jpg',
      href: '@john',
    },
    {
      name: 'Spider Man',
      description:
        'Spider-Man is a superhero created by writer-editor Stan Lee and writer-artist Steve Ditko',
      avatar:
        'https://br.atsit.in/vi/wp-content/uploads/2021/06/video-concept-spider-man-4-tiet-lo-tran-chien-sieu-pham-tu-phan-tiep-theo-bi-loai-bo-cua-sam-raimi-spider-man-4.jpg',
      href: '@john',
    },
  ];

  return (
    <Box paddingTop={1}>
      <Typography mb={1} variant="h6" fontWeight={600}>
        Có thể bạn quan tâm
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: '1.5rem',
        }}
      >
        {categories.map((item, index) => {
          return (
            <TopicItem
              key={index}
              name={item.name}
              link={item.link}
              sx={{
                marginBottom: '0.5rem',
                marginRight: '0.5rem',
              }}
            />
          );
        })}
      </Box>
      <Stack
        direction="column"
        alignItems="stretch"
        spacing={2}
        paddingBottom={3}
      >
        <Typography variant="h6" fontWeight={600}>
          Tác giả nổi bật
        </Typography>

        {writers.map((item, index) => {
          return <Writer key={index} writer={item} />;
        })}
      </Stack>
      <Footer />
    </Box>
  );
};

export default Sidebar;

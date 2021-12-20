import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TopicItem from '../../userHomePage/Topic/Topic';
import Writer from './writer/writer';

function InitCategories() {
  const categories = [];
  for (let i = 0; i < 10; i++) {
    const name = 'programing learning listening'.slice(
      Math.ceil(Math.random() * 10),
      Math.ceil(Math.random() * 20 + 4),
    );
    categories.push({ name: name, link: '#' });
  }
  return categories;
}

const Sidebar = props => {
  const categories = InitCategories();
  const writers = [
    {
      name: 'Captain America',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://cafebiz.cafebizcdn.vn/thumb_w/600/2019/photo1557224364584-1557224364877-crop-15572243735951912688033.jpg',
      href: '#',
    },
    {
      name: 'Thor',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://ss-images.saostar.vn/pc/1594175247996/avengers-endgame-thor-feature.jpg',
      href: '#',
    },
    {
      name: 'Iron Man',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://media.vov.vn/sites/default/files/styles/large/public/2020-11/1-1605511846508372305113.jpg',
      href: '#',
    },
    {
      name: 'Spider Man',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://br.atsit.in/vi/wp-content/uploads/2021/06/video-concept-spider-man-4-tiet-lo-tran-chien-sieu-pham-tu-phan-tiep-theo-bi-loai-bo-cua-sam-raimi-spider-man-4.jpg',
      href: '#',
    },
  ];

  return (
    <Box>
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
        {categories.map(item => {
          return (
            <TopicItem
              name={item.name}
              link={item.link}
              marginBottom={1}
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

        {writers.map(item => {
          return <Writer writer={item} />;
        })}
      </Stack>
      {/* <Footer /> */}
    </Box>
  );
};

export default Sidebar;

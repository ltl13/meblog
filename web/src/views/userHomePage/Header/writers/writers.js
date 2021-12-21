import { CssBaseline, Stack } from '@mui/material';
import React, { Fragment } from 'react';
import WriterItem from './writerItem';

const Writers = props => {
  var writers = [
    {
      name: 'Captain America',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://cafebiz.cafebizcdn.vn/thumb_w/600/2019/photo1557224364584-1557224364877-crop-15572243735951912688033.jpg',
      href: '/@john',
    },
    {
      name: 'Thor',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://ss-images.saostar.vn/pc/1594175247996/avengers-endgame-thor-feature.jpg',
      href: '/@john',
    },
    {
      name: 'Iron Man',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://media.vov.vn/sites/default/files/styles/large/public/2020-11/1-1605511846508372305113.jpg',
      href: '/@john',
    },
    {
      name: 'Spider Man',
      description: 'Novelist: Veil, Breach, Borderless, Bandwidth, Neon',
      avatar:
        'https://br.atsit.in/vi/wp-content/uploads/2021/06/video-concept-spider-man-4-tiet-lo-tran-chien-sieu-pham-tu-phan-tiep-theo-bi-loai-bo-cua-sam-raimi-spider-man-4.jpg',
      href: '/@john',
    },
  ];

  writers = writers.concat(writers).slice(0, -1);
  return (
    <Fragment>
      <CssBaseline />
      <Stack
        direction="row"
        alignItems="flex-start"
        paddingTop={1}
        spacing={4}
        sx={{
          maxWidth: '100%',
          overflow: 'auto',
          padding: '2rem 0 0.5rem 0',
          '&::-webkit-scrollbar': {
            height: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            height: '7px',
            background: '#757575',
            borderRadius: '10px',
          },
        }}
        props
      >
        {writers.map(item => {
          return <WriterItem writer={item} />;
        })}
      </Stack>
    </Fragment>
  );
};

export default Writers;

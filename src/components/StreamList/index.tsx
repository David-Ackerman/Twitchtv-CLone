import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamCategory,
  StreamDescription,
  TagRow,
  TagView,
  TagText
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = ( ) => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1} >David_Ackerman</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1} >Qualquer descrição pode ser aplicada</StreamDescription>
          <StreamCategory numberOfLines={1} >Any Category</StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
}

export default StreamList;
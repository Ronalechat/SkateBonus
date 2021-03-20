import React from "react";
import styled from "styled-components";

type TagType = {
  tagName: string;
  tagColor?: string;
};

const TagWrapper = styled.span<{ tagColor: string }>`
  border-radius: 5px;
  padding: 4px 8px;
  background-color: ${({ tagColor }) => tagColor};
  margin: 2px 4px;
  font-size: 10px;
  color: #fff;
  font-size: 700;
  text-transform: uppercase;
`;

const Tag: React.FC<TagType> = ({ tagName, tagColor }) => {
  return <TagWrapper tagColor={tagColor || "#7E7E7E"}>{tagName}</TagWrapper>;
};

export type NewsCardType = {
  title: string;
  tags: string[];
  bodyPreview: string;
  imageURL: string;
};

const NewsCardContainer = styled.div`
  padding: 20px;
  display: flex;
  border-bottom: 1px solid black;
`;

const NewsCardImage = styled.span<{ imageURL: string }>`
  height: 160px;
  width: 160px;
  border-radius: 5px;
  flex-shrink: 0;
  background-image: url("${({ imageURL }) => imageURL}");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  display: block;
`;
const NewsCardContents = styled.div`
  margin-left: 16px;
`;

const NewsTitle = styled.h3`
  font-size: 1.15rem;
  line-height: 1.25rem;
  margin-block-end: 0.5rem;
  margin-block-start: 0.5rem;
`;

const NewsTags = styled.div`
  display: flex;
  &:nth-child(1) {
    margin-left: 0;
  }
`;

const BodyPreview = styled.div`
  font-size: 0.9rem;
`;

const NewsCard: React.FC<NewsCardType> = ({
  title,
  tags,
  bodyPreview,
  imageURL,
}) => {
  const displayedTags = tags.map((t) => <Tag key={t} tagName={t} />);

  return (
    <div>
      <NewsCardContainer>
        <NewsCardImage imageURL={imageURL} />
        <NewsCardContents>
          <NewsTitle>{title}</NewsTitle>
          <NewsTags>{displayedTags}</NewsTags>
          <BodyPreview>{bodyPreview}</BodyPreview>
        </NewsCardContents>
      </NewsCardContainer>
    </div>
  );
};

export { NewsCard };

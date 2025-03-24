import styled from 'styled-components';

const wallpaper = require("../../assets/gym.png");

export const Content = styled.div`
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 80px 10px;
  background-image: url(${wallpaper});
  background-size: cover; 
  background-position: center; 
  
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px; 
`;

export const CommentsWrapper = styled.div`
  display: flex;
  width: 200%;
  gap: 30px;
  transition: transform 0.5s ease-in-out;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #fff;
    color: #333;
    transform: translateY(-50%) scale(1.1);
  }

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }
`;


export const CommentBox = styled.div`
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 400px;
  text-align: justify;
`;

export const Name = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Comment = styled.p`
  font-size: 14px;
  color: #555;
`;

import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Title from '../../components/title';

export const comments = [
  { name: "Lorem ipsum", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim velit. Etiam nec rutrum mi. Maecenas a ipsum id arcu facilisis hendrerit. Morbi eleifend dapibus sem, at luctus urna ullamcorper quis. Vivamus nibh metus, sollicitudin vitae orci ut, tempus finibus neque." },
  { name: "Lorem ipsum", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim velit. Etiam nec rutrum mi. Maecenas a ipsum id arcu facilisis hendrerit. Morbi eleifend dapibus sem, at luctus urna ullamcorper quis. Vivamus nibh metus, sollicitudin vitae orci ut, tempus finibus neque." },
  { name: "Lorem ipsum", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim velit. Etiam nec rutrum mi. Maecenas a ipsum id arcu facilisis hendrerit. Morbi eleifend dapibus sem, at luctus urna ullamcorper quis. Vivamus nibh metus, sollicitudin vitae orci ut, tempus finibus neque." },
  { name: "Lorem ipsum", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim velit. Etiam nec rutrum mi. Maecenas a ipsum id arcu facilisis hendrerit. Morbi eleifend dapibus sem, at luctus urna ullamcorper quis. Vivamus nibh metus, sollicitudin vitae orci ut, tempus finibus neque." },
  { name: "Lorem ipsum", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim velit. Etiam nec rutrum mi. Maecenas a ipsum id arcu facilisis hendrerit. Morbi eleifend dapibus sem, at luctus urna ullamcorper quis. Vivamus nibh metus, sollicitudin vitae orci ut, tempus finibus neque." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const itemsPerView = 3; 
  const extendedComments = [...comments, ...comments];

  useEffect(() => {
    if (index === comments.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 500); 
    } else {
      setTransition(true);
    }
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (comments.length + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + comments.length) % comments.length);
  };

  return (
    <S.Content id="ServicesTag">
      <Title 
        uptitle="~ Depoimentos dos Alunos ~" 
        title="Transformações que Contam Histórias"
        legend="Veja os comentários de quem já passou por aqui!"
      />

      <S.CarouselContainer>
        <S.Arrow onClick={prevSlide}>
          {FaChevronLeft({})}
        </S.Arrow>

        <S.CommentsWrapper style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)`, transition: transition ? "transform 0.5s ease-in-out" : "none" }}>
          {extendedComments.map((item, idx) => (
            <S.CommentBox key={idx}>
              <S.Name>{item.name}</S.Name>
              <S.Comment>{item.comment}</S.Comment>
            </S.CommentBox>
          ))}
        </S.CommentsWrapper>

        <S.Arrow onClick={nextSlide}>
        {FaChevronRight({})}
        </S.Arrow>
      </S.CarouselContainer>
    </S.Content>
  );
}

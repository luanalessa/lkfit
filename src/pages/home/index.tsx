import * as S from './styles';
import Button from '../../components/button';

export default function PersonalTraining() {
  return (
    <S.PageContainer>
      <S.ContentWrapper>
        <S.PageTitle>
          <span>Lucas Eduardo</span>
        </S.PageTitle>
        <S.PageTitle>
        Personal Trainer | Consultoria online
        </S.PageTitle>
        <S.DescriptionText>
          Seja sua melhor versão com treinos <br/>
          personalizados e acompanhamento completo.
        </S.DescriptionText>
        <S.ActionButtonWrapper>
          <Button variant="outline" onClick={() => console.log('Botão clicado')}>
            Comece agora!
          </Button>
        </S.ActionButtonWrapper>
      </S.ContentWrapper>
      <S.BannerImageWrapper />
    </S.PageContainer>
  );
}

import TextBlock from '../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import SliderBlock from '../components/SliderBlock';
import SubscribeFormBlock from '../components/SubscribeFormBlock';
import CtaFormBlock from '../components/CtaFormBlock';
import ArticleListBlock from '../components/ArticleListBlock';
import ArticleIntroBlock from '../components/ArticleIntroBlock';

export default function useComponent (type) {
  switch (type) {
    case 'text_block':
      return TextBlock;
    case 'image_block':
      return ImageBlock;
    case 'slider_block':
      return SliderBlock;
    case 'subscribe_form_block':
      return SubscribeFormBlock;
    case 'cta_form_block':
      return CtaFormBlock;
    case 'article_list_block':
      return ArticleListBlock;
    case 'article_intro_block':
      return ArticleIntroBlock;
    default: ''
  }
}
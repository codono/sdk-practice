import './itemCard.css';

interface ItemCardProps {
  size?: 'sm' | 'md' | 'lg';
  imgSrc?: string;
  content?: any;
}

export const ItemCard = ({
  size = 'lg',
  imgSrc = 'https://sendia.s3.ap-northeast-2.amazonaws.com/assets/aris-logo.png',
  content = 'item card content',
  ...props
}: ItemCardProps): JSX.Element => {
  return (
    <div className={`itemCard-${size}`}>
      <img
        className={`itemCard-img-${size}`}
        src={imgSrc}
        alt="item card img"
      />
      <div className="itemCard-content">{content}</div>
    </div>
  );
};

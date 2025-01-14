export const Freelancer = ({ text1, text2 }) => {
  return (
    <div className='freelancer-container'>
      <h3>Sebastián Siman</h3>
      <p>{text1}</p>
      <div className='freelance-pulse-container'>
        <span className='freelance-pulse'>
          <div className='outline'></div>
        </span>
        <p>{text2}</p>
      </div>
    </div>
  );
};

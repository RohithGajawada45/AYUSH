import React from 'react';
import './Content.css'; // Import the external CSS file

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-box">
        <img
          src="https://play-lh.googleusercontent.com/jOOCxt0YRNlAEmJ4In1roEjEyjisdGakTGTzPzxdjB8KtpIU4VIUVxVNshcjqRUGejQ" // Replace with your image URL
          alt="Your Images"
          className="content-image"
        />
        <h2 className="content-heading">
          Ayush
        </h2>
        <p className="content-description">
        Lorem ipsum dolor si magna lacinia pretium. Aliquam erat volutpat. Donec tristique convallis mi, at tempor orci condimentum in. Praesent vel congue risus, eu consectetur nisi. Vivamus cursus sollicitudin nunc, vitae gravida magna. In tincidunt mauris ut tincidunt hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sed accumsan arcu. Pellentesque eu rhoncus elit. Praesent quis ante lectus. Vivamus varius ex fringilla vulputate tristique. Aliquam dictum ipsum et tellus bibendum, eget facilisis lorem laoreet. Nam faucibus ullamcorper odio mollis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et gravida lorem. Maecenas vitae sapien suscipit, imperdiet augue vitae, posuere mi.
        </p>
      </div>
    </div>
  );
};

export default Content;

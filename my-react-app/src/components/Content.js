import React from 'react';
import './Content.css'; // Import the external CSS file

const Content = () => {
  return (
    <div className="content-container">
      <div className="content-box">
        <img
          src="./images/tempp" // Replace with your image URL
          alt="Your Image"
          className="content-image"
        />
        <h2 className="content-heading">
          Your Headline Here
        </h2>
        <p className="content-description">
        ASH LOVES ROHITH
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum aliquam libero, sit amet interdum urna elementum eu. Integer auctor tortor turpis, luctus tincidunt magna maximus a. Vestibulum posuere non metus eleifend vestibulum. Praesent lacus quam, mattis eget turpis non, rutrum fermentum augue. Sed eleifend interdum tellus, ut elementum odio gravida eu. Fusce vestibulum urna orci, sit amet malesuada lacus mattis nec. Aenean rhoncus ut lectus in bibendum. Etiam non tincidunt dolor. Curabitur bibendum ligula id urna euismod, vitae porttitor felis commodo. Nullam vulputate quam vitae nibh lobortis venenatis. Suspendisse lectus massa, accumsan sed fringilla sit amet, lacinia eget massa.

Vivamus rhoncus mauris vitae magna lacinia pretium. Aliquam erat volutpat. Donec tristique convallis mi, at tempor orci condimentum in. Praesent vel congue risus, eu consectetur nisi. Vivamus cursus sollicitudin nunc, vitae gravida magna. In tincidunt mauris ut tincidunt hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sed accumsan arcu. Pellentesque eu rhoncus elit. Praesent quis ante lectus. Vivamus varius ex fringilla vulputate tristique. Aliquam dictum ipsum et tellus bibendum, eget facilisis lorem laoreet. Nam faucibus ullamcorper odio mollis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse et gravida lorem. Maecenas vitae sapien suscipit, imperdiet augue vitae, posuere mi.
        </p>
      </div>
    </div>
  );
};

export default Content;

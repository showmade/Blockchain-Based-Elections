import React from 'react';

import Button from '../button';

import './styles.css';

const sideBar = () => (
  <div className="main-sidebar">
    <Button
      url="https://www.w3schools.com/css/css_positioning.asp"
      description="CSS Positioning"
      image="https://store-images.s-microsoft.com/image/apps.10154.13703813498146682.59ea0965-457f-440d-a02e-2a8fce6ff46e.06a50486-5efa-40ad-8f7f-155c1eb61ea3?mode=scale&q=90&h=225&w=150"
    />
    <Button
      url="https://www.youtube.com/watch?v=TI4v4Y8yRjw&t=15s"
      description="Style Guide"
      image="https://lh3.googleusercontent.com/arScjoq0DLDl3lK1AkIyVkMYKRaNgvEtuX88jINO49AZ6pGRciwDP1w392s0Y1kym7g=w160"
    />
    <Button
      url="https://www.primefaces.org/primereact/#/setup"
      description="Prime React"
      image="data:image/png;base64,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"
    />
    <Button url="https://www.google.com.br" description="Google" image="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"/>
  </div>
);

export default sideBar;

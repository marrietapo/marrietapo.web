import React from 'react';

const BodyTitle = () => {

    const title = '  marrietapo';
    const point = '.';
    const extension = 'dev';

    return (
      <div className="body_title">
        {title}
        <span className="body_title_point">{point}</span>
        {extension}
      </div>
    );
}

export default BodyTitle;

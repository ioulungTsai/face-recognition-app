import React from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='f3 light-blue'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='f2 light-blue'>
        {entries}
      </div>
    </div>
  )
}

export default Rank;

import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function Buttn() {
    const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <div><Button className='abtbtn' variant="primary" disabled={isLoading}  onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'view more'}
    </Button></div>
  )
}

export default Buttn
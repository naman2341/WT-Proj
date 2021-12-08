import React from 'react';

export default function Rating(props) {
  return !props.value ? (
    <div></div>
  ) : (
    <div className="end">
     <p>.</p>
    </div>
  );
}

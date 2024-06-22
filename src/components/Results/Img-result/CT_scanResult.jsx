import React, { useEffect } from 'react';
import { ct_scan } from '../../../disease';
import { useParams } from 'react-router-dom';
import ResultFormat from '../ResultFormat';

const CTScanResult = ({setShowAnimate}) => {
  const {id}=useParams();
//   console.log("iddd",id);
 useEffect(()=>{
   setTimeout(() => {
     setShowAnimate(true);
   }, 3000);
 },[setShowAnimate])
    return (
    <ResultFormat disease='CT Scan Disease' description={ct_scan.description} symptoms={ct_scan.symptoms} precautions={ct_scan.precautions} id={id} />
  );
};

export default CTScanResult;

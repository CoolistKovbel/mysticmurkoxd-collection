import React from "react";

export const SingleAnnouncement = (annoucnement:any) => {

    console.log(annoucnement.annoucnement)


  return (
    <div key={crypto.randomUUID()} className="bg-black text-emerald-500 border-2 boreder-black shadow-lg rounded-lg p-3">
      <h2>{`${annoucnement.annoucnement.author.toString().substring(0, 5)} ... ${annoucnement.annoucnement.author.toString().substring(annoucnement.annoucnement.author.toString().length - 6)}`}</h2>
      <p>{annoucnement.annoucnement.message.toString()}</p>
    </div>
  );
};

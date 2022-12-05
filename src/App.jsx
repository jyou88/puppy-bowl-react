import React, { useState } from 'react'

import './App.css'

// function List(props) {
//   return (
//     <ul>
//       {DataTransfer.map((item) => (
//           <li key={item.id}>{item.text}</li>
//       ))}
//     </ul>
//   )
// }

// export default List

// const fakePlayers = [
//   {
//     "id": 9724, "name": "GoodBoy",
//     "breed": "Dog",
//     "status": "bench",
//     "imageUrl": "", "createdAt": "2022-12-02T19:45:12.203Z", "updatedAt": "2022-12-02T19:45:12.203Z", "teamId": 533, "cohortId": 283
//   },
//   {
//     "id": 9208, "name": "Gina", "breed": "Labrador Retriever / Chow Chow", "status": "bench", "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Gina-PBXVI.jpg", "createdAt": "2022-11-28T20:09:47.370Z", "updatedAt": "2022-11-28T20:09:47.370Z", "teamId": 532, "cohortId": 283
//   },
//   {
//     "id": 9375, "name": "Arnold", "breed": "Terrier", "status": "bench", "imageUrl": "https://images.pexels.com/photos/4088307/pexels-photo-4088307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "createdAt": "2022-12-02T15:03:52.558Z", "updatedAt": "2022-12-02T15:03:52.558Z", "teamId": null, "cohortId": 283
//   },
//   {
//     "id": 9377, "name": "Walter", "breed": "Bernese Mountain Dog", "status": "bench", "imageUrl": "https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "createdAt": "2022-12-02T15:04:38.173Z", "updatedAt": "2022-12-02T15:04:38.173Z", "teamId": null, "cohortId": 283
//   },
//   {
//     "id": 9379, "name": "Ivy", "breed": "Boxer", "status": "bench", "imageUrl": "https://images.pexels.com/photos/1294062/pexels-photo-1294062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "createdAt": "2022-12-02T15:05:29.671Z", "updatedAt": "2022-12-02T15:05:29.671Z", "teamId": null, "cohortId": 283
//   },
//   {
//     "id": 9430, "name": "Lamont", "breed": "Great Dane/Lab", "status": "bench", "imageUrl": "https://animalso.com/wp-content/uploads/2019/02/Great-Dane-Lab-mix-2.jpg", "createdAt": "2022-12-02T16:38:00.743Z", "updatedAt": "2022-12-02T16:38:00.743Z", "teamId": null, "cohortId": 283
//   }]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='all-players-container' className="App">
      {/* Puppy Container
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[0].name}</p>
          <p class="pup-number">#{fakePlayers[0].id}</p>
        </div>
        <img src={fakePlayers[0].imageUrl} />
        <button class="detail-button" data-id={fakePlayers[0].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[0].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[1].name}</p>
          <p class="pup-number">#{fakePlayers[1].id}</p>
        </div>
        <img src={fakePlayers[1].imageUrl} />
        <button class="detail-button" data-id={fakePlayers[1].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[1].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[2].name}</p>
          <p class="pup-number">#{fakePlayers[2].id}</p>
        </div>
        <img src={fakePlayers[2].imageUrl} />
        <button class="detail-button" data-id={fakePlayers[2].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[2].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[3].name}</p>
          <p class="pup-number">#{fakePlayers[3].id}</p>
        </div>
        <img src={fakePlayers[3].imageUrl} />
        <button class="detail-button" data-id={fakePlayers[3].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[3].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[4].name}</p>
          <p class="pup-number">#{fakePlayers[4].id}</p>
        </div>
        <img src={fakePlayers[4].imageUrl} />
        <button class="detail-button" data-id={fakePlayers[4].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[4].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[5].name}</p>
          <p class="pup-number">#{fakePlayers[5].id}</p>
        </div>
        <img src={fakePlayers[5].imageUrl} />
        <button class="detail-button" data-id={fakePlayers[5].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[5].id}>Remove from roster</button>
      </div> */}
    </div>
  )
}

export default App


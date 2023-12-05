# Map Visualization of Grab Trajectory Data (_grab2vec_) using Leaflet

Visualizing Grab Jakarta trajectories as a step of data understanding for *Next Spatio-Temporal Predictions using LSTM* (_on progress_).

---

### `🔧Tech Stack`
- [Next.js](https://nextjs.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [serverless-mysql](https://github.com/jeremydaly/serverless-mysql)

### `🚪API Endpoint`
- `/api/trajectories/:id` returns a bundle of trajectory and its related points
- `/api/points` returns all point data (_not recommended_)

**Example:**

```bash
$ curl http://localhost:3000/api/trajectories/69 --request "GET"

{
  "message":"success",
  "bundle": {
    "trajectory": {
      "id":69,
      "codename":"trj69",
      "started_at":"2019-04-11T23:27:48.000Z",
      "ended_at":"2019-04-11T23:33:20.000Z"
      },
      "points": [
        {
          "id":7505,
          "trj_id":69,
          "driving_mode":"motorcycle",
          "osname":"ios",
          "pingtimestamp":"2019-04-11T23:27:48.000Z",
          "rawlat":-6.228238,
          "rawlng":106.91619,
          "speed":5.54,
          "bearing":13,
          "accuracy":5
        },
        ...
      ]
  }
}
```
withoud the indentation 😔

### `🔬Next Spatio-Temporal Prediction`
🚧

### `🎯Deployment`
🚧

### `🔜What's next?`
- [x] Data bundling (trajectory, points, error)
- [ ] Status code
- [ ] Trajectory list endpoint
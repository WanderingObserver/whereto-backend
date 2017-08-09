import yelp, { client } from 'yelp-fusion'

const token = 'gdrsso4F906v3Ruga2nslfMGe20d0A7cRqarZ_qNcrnv_2nsEIKcnAQ0cXb_uv4xR_l23yCJzwEIibr4_LXGVNvC8NFuMRtHeKZ-0L1nTkm2ArgEuLn2PCKq65Z7WXYx'
const yelpClient = client(token)

const yelpController = {}

yelpController.postSearch = (req, res) => {
  yelpClient.search({
    term: req.body.term,
    location: req.body.location,
    sort_by: req.body.sort_by,
    price: req.body.price,
    limit: req.body.limit
  }).then(response => {
    res.json({
      yelp: response.jsonBody.businesses
    })
  }).catch(e => {
    console.log(e)
  })
}

export default yelpController

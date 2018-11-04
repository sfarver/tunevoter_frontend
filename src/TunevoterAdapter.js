class TuneVoterAdapter {
  static async sendSpotifyData(args) {
    
    const {venueSlug, accessToken} = args
    
    await fetch('https://tunevoter-backend.herokuapp.com/api/v1/spotify_users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spotify_user: {
          venue_slug: venueSlug,
          access_token: accessToken
        }
      })
    })
  }
}

export default TuneVoterAdapter
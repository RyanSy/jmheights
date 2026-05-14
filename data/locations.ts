export interface Town {
  name: string;
  slug: string;
  zipCodes: string[];
  landmarks: string;
  content: string;
}

export interface County {
  name: string;
  description: string;
  towns: Town[];
}

export const locationData: Record<string, County> = {
  "bergen-county": {
    name: "Bergen County",
    description: "Providing 24/7 emergency plumbing and HVAC services to Bergen County homes since 1969.",
    towns: [
      { name: "Allendale", slug: "allendale", zipCodes: ["07401"], landmarks: "Crestwood Lake", content: "Expert HVAC maintenance for Allendale's residential neighborhoods." },
      { name: "Bergenfield", slug: "bergenfield", zipCodes: ["07621"], landmarks: "Cooper's Pond", content: "Reliable plumbing repairs and sewer cleaning in Bergenfield." },
      { name: "Cliffside Park", slug: "cliffside-park", zipCodes: ["07010"], landmarks: "The Palisades", content: "Specializing in high-rise HVAC and plumbing solutions." },
      { name: "Closter", slug: "closter", zipCodes: ["07624"], landmarks: "Closter Plaza", content: "Premium heating and cooling installations for Closter residents." },
      { name: "Cresskill", slug: "cresskill", zipCodes: ["07626"], landmarks: "Camp Merritt Memorial", content: "Emergency pipe repair and AC service in Cresskill." },
      { name: "Demarest", slug: "demarest", zipCodes: ["07627"], landmarks: "The Duck Pond", content: "Comprehensive boiler and furnace services in Demarest." },
      { name: "Dumont", slug: "dumont", zipCodes: ["07628"], landmarks: "Twin-Boro Field", content: "Local drain cleaning and water heater replacement." },
      { name: "Edgewater", slug: "edgewater", zipCodes: ["07020"], landmarks: "Edgewater Commons", content: "Waterfront property specialized HVAC maintenance." },
      { name: "Elmwood Park", slug: "elmwood-park", zipCodes: ["07407"], landmarks: "Passaic River Parkway", content: "Fast emergency plumbing and heating repairs." },
      { name: "Emerson", slug: "emerson", zipCodes: ["07630"], landmarks: "Emerson Woods", content: "Trusted HVAC technicians serving the 'Family Town'." },
      { name: "Englewood", slug: "englewood", zipCodes: ["07631"], landmarks: "BergenPAC", content: "Commercial and residential plumbing expertise." },
      { name: "Englewood Cliffs", slug: "englewood-cliffs", zipCodes: ["07632"], landmarks: "Flat Rock Brook Nature Center", content: "High-end cooling and heating system upgrades." },
      { name: "Fair Lawn", slug: "fair-lawn", zipCodes: ["07410"], landmarks: "Radburn District", content: "24/7 emergency services for Fair Lawn families." },
      { name: "Fort Lee", slug: "fort-lee", zipCodes: ["07024"], landmarks: "George Washington Bridge", content: "Sewer line repair and AC installation experts." },
      { name: "Franklin Lakes", slug: "franklin-lakes", zipCodes: ["07417"], landmarks: "Franklin Lakes Nature Preserve", content: "Custom HVAC design and installation." },
      { name: "Garfield", slug: "garfield", zipCodes: ["07026"], landmarks: "Dahnert's Lake County Park", content: "Boiler repair and drain cleaning in Garfield." },
      { name: "Glen Rock", slug: "glen-rock", zipCodes: ["07452"], landmarks: "The Rock", content: "Reliable home comfort services since 1969." },
      { name: "Hackensack", slug: "hackensack", zipCodes: ["07601", "07602"], landmarks: "Hackensack Meridian Health", content: "Prompt plumbing and HVAC support for the county seat." },
      { name: "Hasbrouck Heights", slug: "hasbrouck-heights", zipCodes: ["07604"], landmarks: "Hasbrouck Heights Circle", content: "Local water heater and furnace specialists." },
      { name: "Hillsdale", slug: "hillsdale", zipCodes: ["07642"], landmarks: "Hillsdale Train Station", content: "Expert heating and air conditioning maintenance." },
      { name: "Ho-Ho-Kus", slug: "ho-ho-kus", zipCodes: ["07423"], landmarks: "The Hermitage", content: "Precision HVAC services for historic homes." },
      { name: "Leonia", slug: "leonia", zipCodes: ["07605"], landmarks: "Leonia Library", content: "Drain cleaning and emergency plumbing repairs." },
      { name: "Lodi", slug: "lodi", zipCodes: ["07644"], landmarks: "Saddle River County Park", content: "Full-service HVAC and plumbing contractors." },
      { name: "Lyndhurst", slug: "lyndhurst", zipCodes: ["07071"], landmarks: "Riverside County Park", content: "Comprehensive heating and cooling solutions." },
      { name: "Mahwah", slug: "mahwah", zipCodes: ["07430", "07495"], landmarks: "Ramapo College", content: "Largest-territory residential HVAC support." },
      { name: "Maywood", slug: "maywood", zipCodes: ["07607"], landmarks: "Maywood Station Museum", content: "Expert furnace repair and AC service." },
      { name: "Midland Park", slug: "midland-park", zipCodes: ["07432"], landmarks: "Midland Park Shopping Center", content: "Trusted local plumbing and drain services." },
      { name: "Montvale", slug: "montvale", zipCodes: ["07645"], landmarks: "Montvale Train Station", content: "High-efficiency cooling and heating upgrades." },
      { name: "New Milford", slug: "new-milford", zipCodes: ["07646"], landmarks: "Hirschfeld Brook", content: "Sump pump and water heater experts." },
      { name: "Oakland", slug: "oakland", zipCodes: ["07436"], landmarks: "Ramapo Mountain State Forest", content: "Emergency boiler and AC repair services." },
      { name: "Old Tappan", slug: "old-tappan", zipCodes: ["07675"], landmarks: "Old Tappan Golf Course", content: "Residential HVAC and plumbing maintenance." },
      { name: "Oradell", slug: "oradell", zipCodes: ["07649"], landmarks: "Oradell Reservoir", content: "Local experts in heating and cooling." },
      { name: "Palisades Park", slug: "palisades-park", zipCodes: ["07650"], landmarks: "Overpeck County Park", content: "Commercial and residential plumbing repair." },
      { name: "Paramus", slug: "paramus", zipCodes: ["07652"], landmarks: "Garden State Plaza", content: "Premier HVAC installations in the shopping capital." },
      { name: "Park Ridge", slug: "park-ridge", zipCodes: ["07656"], landmarks: "Pascack Brook County Park", content: "Furnace and water heater replacements." },
      { name: "Ramsey", slug: "ramsey", zipCodes: ["07446"], landmarks: "Main Street Ramsey", content: "Professional heating and air conditioning." },
      { name: "Ridgefield", slug: "ridgefield", zipCodes: ["07657"], landmarks: "Ridgefield Nature Center", content: "Expert drain cleaning and HVAC service." },
      { name: "Ridgefield Park", slug: "ridgefield-park", zipCodes: ["07660"], landmarks: "Veterans Memorial Park", content: "Reliable 24/7 plumbing and HVAC." },
      { name: "Ridgewood", slug: "ridgewood", zipCodes: ["07450", "07451"], landmarks: "Graydon Pool", content: "Top-tier home comfort services for Ridgewood." },
      { name: "River Edge", slug: "river-edge", zipCodes: ["07661"], landmarks: "Steuben House", content: "Local boiler and AC technicians." },
      { name: "River Vale", slug: "river-vale", zipCodes: ["07675"], landmarks: "River Vale Country Club", content: "Complete residential HVAC solutions." },
      { name: "Rutherford", slug: "rutherford", zipCodes: ["07070"], landmarks: "Felician University", content: "Historic home heating and plumbing experts." },
      { name: "Saddle Brook", slug: "saddle-brook", zipCodes: ["07663"], landmarks: "Saddle River County Park", content: "Fast response emergency HVAC repairs." },
      { name: "Saddle River", slug: "saddle-river", zipCodes: ["07458"], landmarks: "Saddle River Town Hall", content: "Premium HVAC maintenance and installation." },
      { name: "Teaneck", slug: "teaneck", zipCodes: ["07666"], landmarks: "Holy Name Medical Center", content: "Sewer line and plumbing specialists." },
      { name: "Tenafly", slug: "tenafly", zipCodes: ["07670"], landmarks: "Tenafly Nature Center", content: "Full-service heating and cooling experts." },
      { name: "Upper Saddle River", slug: "upper-saddle-river", zipCodes: ["07458"], landmarks: "Lions Park", content: "Expert HVAC design and maintenance." },
      { name: "Waldwick", slug: "waldwick", zipCodes: ["07463"], landmarks: "Waldwick Train Station", content: "Trusted local plumbing and drain services." },
      { name: "Westwood", slug: "westwood", zipCodes: ["07675"], landmarks: "Westwood Veterans Memorial Park", content: "The 'Hub of the Pascack Valley' HVAC pros." },
      { name: "Woodcliff Lake", slug: "woodcliff-lake", zipCodes: ["07677"], landmarks: "Woodcliff Lake Reservoir", content: "Heating and cooling for reservoir-area homes." },
      { name: "Wyckoff", slug: "wyckoff", zipCodes: ["07481"], landmarks: "Abma's Farm", content: "Comprehensive home HVAC and plumbing care." }
    ]
  },
  "passaic-county": {
    name: "Passaic County",
    description: "Expert heating and cooling solutions tailored for the Passaic County climate.",
    towns: [
      { name: "Bloomingdale", slug: "bloomingdale", zipCodes: ["07403"], landmarks: "Federal Hill", content: "Expert furnace repair and cooling maintenance." },
      { name: "Clifton", slug: "clifton", zipCodes: ["07011", "07013"], landmarks: "Main Memorial Park", content: "Largest city plumbing and HVAC support in Passaic." },
      { name: "Hawthorne", slug: "hawthorne", zipCodes: ["07506"], landmarks: "Goffle Brook Park", content: "Reliable residential boiler and AC service." },
      { name: "Little Falls", slug: "little-falls", zipCodes: ["07424"], landmarks: "Great Falls of the Passaic", content: "Emergency plumbing and HVAC solutions." },
      { name: "Passaic", slug: "passaic", zipCodes: ["07055"], landmarks: "Third Ward Park", content: "High-demand sewer and drain cleaning experts." },
      { name: "Paterson", slug: "paterson", zipCodes: ["07501", "07505"], landmarks: "Paterson Great Falls", content: "Commercial and residential service specialists." },
      { name: "Pompton Lakes", slug: "pompton-lakes", zipCodes: ["07442"], landmarks: "Pompton Lake", content: "Trusted heating and air conditioning repair." },
      { name: "Ringwood", slug: "ringwood", zipCodes: ["07456"], landmarks: "Ringwood Manor", content: "Specialized heating for wooded mountain homes." },
      { name: "Totowa", slug: "totowa", zipCodes: ["07511", "07512"], landmarks: "Totowa Square", content: "Rapid response HVAC and plumbing experts." },
      { name: "Wanaque", slug: "wanaque", zipCodes: ["07465"], landmarks: "Wanaque Reservoir", content: "Quality cooling and heating maintenance." },
      { name: "Wayne", slug: "wayne", zipCodes: ["07470"], landmarks: "William Paterson University", content: "Full-service HVAC and plumbing for Wayne." },
      { name: "West Milford", slug: "west-milford", zipCodes: ["07480"], landmarks: "Greenwood Lake", content: "Comprehensive boiler and furnace service." },
      { name: "Woodland Park", slug: "woodland-park", zipCodes: ["07424"], landmarks: "Garret Mountain Reservation", content: "Expert residential heating and cooling." }
    ]
  }
};
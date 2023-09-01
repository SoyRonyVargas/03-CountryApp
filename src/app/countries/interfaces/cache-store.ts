import { Country } from "./country"
import { Region } from "./region"

export type CustomCache = {
  countries: Country[]
  term: string
}

export type CustomCacheRegion = Pick<CustomCache, 'countries'> & {
  region?: Region
}

export type CacheStore = {
  byRegion: CustomCacheRegion
  byCountries: CustomCache
  byCapital: CustomCache
}

import MatomoTracker from '@mitresthen/matomo-tracker'
import { InstanceParams } from './types'

function createInstance(params: InstanceParams): MatomoTracker {
  return new MatomoTracker(params)
}

export default createInstance

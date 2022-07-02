import {
  ALL_ASSET_PROPOSALS_QUERY,
  ALL_ASSETS_QUERY,
  UPGRADE_PROPOSAL_QUERY,
  TOKEN_ACTION_PROPOSAL_QUERY,
  PARTICIPANT_REMOVAL_PROPOSAL_QUERY,
  PARTICIPANT_PROPOSAL_QUERY,
  BOND_REMOVAL_PROPOSAL_QUERY,
  THREAD_PROPOSAL_PROPOSALS_QUERY,
  THREAD_PROPOSAL_QUERY,
  DESCRIPTOR_CHANGE_PROPOSAL_QUERY,
  FRABRIC_CHANGE_PROPOSAL_QUERY,
  GOVERNOR_CHANGE_PROPOSAL_QUERY,
  ECOSYSTEM_LEAVE_PROPOSAL_QUERY,
  DISSOLUTION_PROPOSAL_QUERY
} from "./queries"

/**
 * Abstract GraphQL API client
 * @property {GraphQLAPIMapper} mapper Model mapper
 */
class GraphQLAPIClient {
  constructor(
    mapper
  ) {
    this.mapper = mapper
  }

  /**
   * @callback mappingCallback
   * @param {GraphQLAPIMapper} mapper
   * @param {any} response
   * @returns {any} Mapped data
   */

  /**
   * Query ¯\_(ツ)_/¯ 
   * @param {any} query Query doc
   * @param {Array} vars Query variables
   * @param {mappingCallback} mappingCallback Model mapping callback
   */
  async query(query, vars = {}, mappingCallback = {}) { }
}

export { 
  GraphQLAPIClient,
  ALL_ASSET_PROPOSALS_QUERY,
  ALL_ASSETS_QUERY,
  THREAD_PROPOSAL_QUERY,
  UPGRADE_PROPOSAL_QUERY,
  TOKEN_ACTION_PROPOSAL_QUERY,
  PARTICIPANT_REMOVAL_PROPOSAL_QUERY,
  PARTICIPANT_PROPOSAL_QUERY,
  BOND_REMOVAL_PROPOSAL_QUERY,
  THREAD_PROPOSAL_PROPOSALS_QUERY,
  DESCRIPTOR_CHANGE_PROPOSAL_QUERY,
  FRABRIC_CHANGE_PROPOSAL_QUERY,
  GOVERNOR_CHANGE_PROPOSAL_QUERY,
  ECOSYSTEM_LEAVE_PROPOSAL_QUERY,
  DISSOLUTION_PROPOSAL_QUERY
}

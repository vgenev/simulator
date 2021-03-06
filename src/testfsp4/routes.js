/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.
 * Gates Foundation
 - Sridevi Miriyala sridevi.miriyala@modusbox.com
 --------------
 ******/

const Handler = require('./handler')
const tags = ['api', 'metadata']

module.exports = [
  {
    method: 'GET',
    path: '/testfsp4/',
    handler: Handler.metadata,
    options: {
      tags: tags,
      description: 'Metadata'
    }
  },
  {
    method: 'POST',
    path: '/testfsp4/parties/{type}/{id}',
    handler: Handler.postPartiesByTypeAndId,
    config: {
      id: 'testfsp4_post_parties',
      tags: tags,
      auth: null,
      description: 'Transfer API.',
      payload: {
        failAction: 'error',
        output: 'data'
      }
    }
  },
  {
    method: 'GET',
    path: '/testfsp4/parties/{type}/{id}',
    handler: Handler.getPartiesByTypeAndId,
    options: {
      tags: tags,
      description: 'Add users to payer simulator'
    }
  },
  {
    method: 'POST',
    path: '/testfsp4/quotes',
    handler: Handler.postQuotes,
    options: {
      tags: tags,
      description: 'Add users to payer simulator'
    }
  },
  {
    method: 'PUT',
    path: '/testfsp4/quotes/{id}',
    handler: Handler.putQuotesById,
    options: {
      tags: tags,
      description: 'Metadata'
    }
  },
  {
    method: 'POST',
    path: '/testfsp4/transfers',
    handler: Handler.postTransfers,
    options: {
      tags: tags,
      description: 'Add users to payer simulator'
    }
  },
  {
    method: 'PUT',
    path: '/testfsp4/transfers/{id}',
    handler: Handler.putTransfersById,
    options: {
      tags: tags,
      description: 'Metadata'
    }
  },
  {
    method: 'PUT',
    path: '/testfsp4/transfers/{id}/error',
    handler: Handler.putTransfersByIdError,
    options: {
      tags: tags,
      description: 'Metadata'
    }
  },
  {
    method: 'GET',
    path: '/testfsp4/correlationid/{id}',
    handler: Handler.getcorrelationId,
    options: {
      tags: tags,
      description: 'Get details based on correlationid'
    }
  }
]

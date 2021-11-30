import { Grid } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import React from 'react'
import SinglePositionInfo from './SinglePositionInfo'
import { liqTokens } from '@components/PositionDetails/PositionDetails.stories'

const tokens: liqTokens[] = [
  {
    symbol: 'BTC',
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png'
  },
  {
    symbol: 'SNY',
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y/logo.png'
  }
]

storiesOf('singlePosition/leftComponent', module)
  .add('closed', () => (
    <Grid style={{ background: '#1C1B1E', width: '540px', height: '500px', padding: '20px' }}>
      <SinglePositionInfo
        data={{
          nameToSwap: 'BTC',
          iconToSwap: tokens[0].logoURI,
          iconFromSwap: tokens[1].logoURI,
          nameFromSwap: 'SNY',
          min: 2149.6,
          max: 149.6,
          fee: 0.05
        }}
        onClickClaimFee={() => console.log('thanks from claiming')}
        liqValueTokenToSwap={2.19703}
        liqValueTokenFromSwap={20.99703}
        unclaimValueTokenToSwap={2.19703}
        unclaimValueTokenFromSwap={9.19703}
        closePosition={() => console.log('close position')}
      />
    </Grid>
  ))
  .add('active', () => (
    <Grid style={{ background: '#1C1B1E', width: '540px', height: '500px', padding: '20px' }}>
      <SinglePositionInfo
        data={{
          nameToSwap: 'BTC',
          iconToSwap: tokens[0].logoURI,
          iconFromSwap: tokens[1].logoURI,
          nameFromSwap: 'SNY',
          min: 2149.6,
          max: 149.6,
          fee: 0.05
        }}
        onClickClaimFee={() => console.log('thanks from claiming')}
        liqValueTokenToSwap={2.19703}
        liqValueTokenFromSwap={20.99703}
        unclaimValueTokenToSwap={2.19703}
        unclaimValueTokenFromSwap={9.19703}
        closePosition={() => console.log('close position')}
      />
    </Grid>
  ))

import React from 'react'
import SinglePositionInfo, { ILiquidityItem } from '@components/PositionDetails/SinglePositionInfo/SinglePositionInfo'
import SinglePositionPlot from '@components/PositionDetails/SinglePositionPlot/SinglePositionPlot'
import { Grid } from '@material-ui/core'
import useStyles from './style'

interface IProps {
  detailsData: Array<{ x: number; y: number }>
  plotMin: number
  plotMax: number
  zoomMinus: () => void
  zoomPlus: () => void
  disabled?: boolean
  style?: React.CSSProperties
  leftRangeIndex: number,
  rightRangeIndex: number,
  currentPrice: number,
  fromToken: string,
  toToken: string,
  positionData: ILiquidityItem
  onClickClaimFee: () => void
  closePosition: () => void
  liqValueTokenToSwap: number
  liqValueTokenFromSwap: number
  unclaimValueTokenToSwap: number
  unclaimValueTokenFromSwap: number
}

const PositionDetails: React.FC<IProps> = ({
  detailsData,
  plotMin,
  plotMax,
  zoomMinus,
  zoomPlus,
  style,
  leftRangeIndex,
  rightRangeIndex,
  currentPrice,
  fromToken,
  toToken,
  positionData,
  onClickClaimFee,
  closePosition,
  liqValueTokenToSwap,
  liqValueTokenFromSwap,
  unclaimValueTokenToSwap,
  unclaimValueTokenFromSwap

}) => {
  const classes = useStyles()
  return (
    <Grid className={classes.wrapperContainer}>
      <Grid className={classes.positionDetails}>
        <SinglePositionInfo
          data={positionData}
          onClickClaimFee={onClickClaimFee}
          closePosition={closePosition}
          liqValueTokenToSwap={liqValueTokenToSwap}
          liqValueTokenFromSwap={liqValueTokenFromSwap}
          unclaimValueTokenToSwap={unclaimValueTokenToSwap}
          unclaimValueTokenFromSwap={unclaimValueTokenFromSwap}
        />
      </Grid>
      <Grid>
        <SinglePositionPlot
          data={detailsData}
          leftRangeIndex={leftRangeIndex}
          rightRangeIndex={rightRangeIndex}
          style={style}
          disabled
          plotMin={plotMin}
          plotMax={plotMax}
          zoomMinus={zoomMinus}
          zoomPlus={zoomPlus}
          currentPrice={currentPrice}
          fromToken={fromToken}
          toToken={toToken}
          className={classes.zoom}
        />
      </Grid>
    </Grid>
  )
}

export default PositionDetails

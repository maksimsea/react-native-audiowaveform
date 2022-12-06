// @flow

/* eslint-disable no-unused-vars  */

type NativeWaveType = {
  componentID: number
} & WaveObjectPropsType;

type WaveObjectPropsType = {
  autoPlay: boolean,
  play: boolean,
  source: number,
  stop: boolean,
  style: ?number,
  waveFormStyle: ?WaveformStyleType,
  onPress: ?Function,
  onFinishPlay: ?Function,
  earpiece: boolean
};

type WaveformStyleType = {
  scrubColor: string,
  waveColor: string
};

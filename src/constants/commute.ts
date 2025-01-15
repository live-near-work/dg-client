import { SegmentItem } from 'components/SegmentedControl';
import BusIcon from 'svg/bus-icon.svg';
import CarIcon from 'svg/car-icon.svg';
import WalkIcon from 'svg/walk-icon.svg';

export interface CommuteTimeType {
  value: number;
  label: string;
}

export const COMMUTE_TIME: CommuteTimeType[] = [
  { value: 10, label: '10분' },
  { value: 20, label: '20분' },
  { value: 30, label: '30분' },
  { value: 40, label: '40분' },
  { value: 50, label: '50분' },
];

export const COMMUTE_TIME_LABELS = COMMUTE_TIME.map(item => item.label);

export const COMMUTE_METHOD: SegmentItem[] = [
  { icon: BusIcon, label: '대중교통' },
  { icon: CarIcon, label: '자동차' },
  { icon: WalkIcon, label: '도보' },
];

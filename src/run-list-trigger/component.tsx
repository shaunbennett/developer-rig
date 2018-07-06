import * as React from 'react';
import { RunList, GenericResponse } from '../core/models/run-list';

const EXTENSION_ON_CONTEXT = 'twitch-ext-context';
const EXTENSION_ON_AUTHORIZED = 'twitch-ext-auth';
const EXTENSION_ON_ERROR = 'twitch-ext-error';

export interface PublicProps {
  runList: RunList;
  iframe?: HTMLIFrameElement;
}

interface State {
  selectedTrigger: string;
  runListTriggerMap: {
    [key: string]: GenericResponse;
  };
  triggerTypeMap: {
    [key: string]: string;
  }
}

type Props = PublicProps;

export class RunListTrigger extends React.Component<Props, State>{

  constructor(props: Props) {
    super(props);

    this.state = {
      ...this.stateFromRunList(this.props.runList),
    }
  }

  public onChange(event: React.FormEvent<HTMLSelectElement>) {
    this.setState({
      selectedTrigger: event.currentTarget.value,
    })
  }

  private stateFromRunList(runList: RunList): State {
    let runlistMap: { [key: string]: GenericResponse} = {}
    let triggerMap: { [key: string]: string } = {}
    for (let callback in runList) {
      for (let resp of runList[callback]) {
        runlistMap[resp.name] = resp;
        triggerMap[resp.name] = callback;
      }
    }

    return {
      selectedTrigger: undefined,
      runListTriggerMap: runlistMap,
      triggerTypeMap: triggerMap,
    }
  }

  private dataFromTrigger(trigger: string) {
    let data = undefined;
    const response = this.state.runListTriggerMap[trigger];
    switch (this.state.triggerTypeMap[trigger]) {
      case 'onContext':
        data = {
          action: EXTENSION_ON_CONTEXT,
          context: response,
        }
        break;
      case 'onAuthorized':
        data = {
          action: EXTENSION_ON_AUTHORIZED,
          auth: response,
        }
        break;
      case 'onError':
        data = {
          action: EXTENSION_ON_ERROR,
          error: response,
        }
        break;
    }
    return data;
  }

  private triggerRunlistResponse(iframe: HTMLIFrameElement): void{
    const data = this.dataFromTrigger(this.state.selectedTrigger);
    if (data) {
      iframe.contentWindow.postMessage(data, '*');
    }
  }

  private renderRunListOptions(runList: RunList): JSX.Element[] {
    let opts = [];
    for (let callback in runList) {
      for (let resp of runList[callback]) {
        opts.push(
          <option key={resp.name}>
            {resp.name}
          </option>
        )
      }
    }
    return opts;
  }

  public render() {
    return (
      <>
        <select onChange={(e) => this.onChange(e)}>
          {this.renderRunListOptions(this.props.runList)}
        </select>
        <button onClick={() => this.triggerRunlistResponse(this.props.iframe)}>Trigger</button>
      </>);
  }
}

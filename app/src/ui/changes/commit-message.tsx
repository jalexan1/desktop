import * as React from 'react'

interface ICommitMessageProps {
  onCreateCommit: (title: string) => void
  branch: string | null
}

interface ICommitMessageState {
  title: string
}

export class CommitMessage extends React.Component<ICommitMessageProps, ICommitMessageState> {

  public constructor(props: ICommitMessageProps) {
    super(props)

    this.state = {
      title: ''
    }
  }

  /** TODO: commit description field */
  /** TODO: disable submit when no files selected */

  private handleTitleChange(event: any) {
    this.setState({ title: event.target.value })
  }

  private handleSubmit(event: any) {
    this.props.onCreateCommit(this.state.title)
    this.setState({ title: '' })
    event.preventDefault()
  }

  public render() {
    const branchName = this.props.branch ? this.props.branch : 'master'
    return (
      <form id='commit-message' onSubmit={event => event.stopPropagation()}>
        <input type='text'
               placeholder='Commit summary'
               value={this.state.title}
               onChange={event => this.handleTitleChange(event) } />

        <button onClick={event => this.handleSubmit(event)}>
          Commit to <strong>{branchName}</strong>
        </button>
      </form>
    )
  }
}
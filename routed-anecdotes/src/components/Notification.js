const Notification = ({message}) => {

  if (message) {
    return (
    <div>
      {message}
    </div>
    )
  }
  return (
    <div>
    </div>
  )
}

export default Notification
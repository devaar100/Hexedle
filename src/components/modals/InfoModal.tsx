import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Guess the HEXEDLE from the colour in 5 tries.<br/><br/> 
      Each guess must be a valid hex code. Hit the enter key/button to submit.<br/><br/>
      After each guess, the colour of the tiles will change to show how close your 
      guess was to the hex code.  A number may appear at the top right indicating the frequency of an alphanumeric.
      </p>

      <div style={{width: "100%", height: 1, backgroundColor: "#777", marginTop: 20, marginBottom: 20}}/>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="1" />
        <Cell value="F" />
        <Cell 
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"/>
        <Cell value="3" />
        <Cell value="C" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The alphanumeric <b>A</b> is in the hex code and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          count={2}
          status="correct"
        />
        <Cell value="B" />
        <Cell value="2" />
        <Cell value="4" />
        <Cell value="7" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The alphanumeric <b>C</b> is in the hex code and in the correct spot with a frequency of 2.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="F" />
        <Cell value="B" />
        <Cell value="2" />
        <Cell value="3" />
        <Cell isRevealing={true} isCompleted={true} value="7" status="present" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The alphanumeric <b>7</b> is in the hex code but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="9" />
        <Cell value="D" />
        <Cell value="3" />
        <Cell isRevealing={true} isCompleted={true} value="6" status="absent" />
        <Cell value="8" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The alphanumeric <b>6</b> is not in the hex code in any spot.
      </p>

      <div style={{width: "100%", height: 1, backgroundColor: "#777", marginTop: 20, marginBottom: 20}}/>

      <p className="text-sm text-gray-500 dark:text-gray-300">
      A new HEXEDLE will be available every day!
      </p>

      {/* <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p> */}
    </BaseModal>
  )
}

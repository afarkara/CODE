import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { setAlert } from '../../actions/alert'
import { connect } from 'react-redux'

const Dashboard = props => {

  const [formData, setFormData] = useState({
    firstAxleP9: 649.76,
    secondAxleP9: 649.86,
    rearAxleP9: 678,
    firstAxleBKWP9: 590.33,
    secondAxleBKWP9: 593.59,
    thirdAxleBKWP9: 645.87,
    fourthAxleBKWP9: 645.66,
    firstAxleGVMP9: 622.06,
    secondAxleGVMP9: 622.33,
    thirdAxleGVMP9: 659.38,
    fourthAxleGVMP9: 659.37,
    firstAxleDesingLoad: 9300,
    secondAxleDesignLoad: 9300,
    firstAxleBKW: 3595,
    secondAxleBKW: 3898,
    thirdAxleBKW: 2046,
    fourthAxleBKW: 1936,
    firstAxleGVM: 6641,
    secondAxleGVM: 6657,
    thirdAxleGVM: 9258,
    fourthAxleGVM: 9256,
    Rate: 48,
    rearAxleDesignLoad: 18000,
    unsprungMass: 1200,
    totalRate: 533.9
  })



  const onChange = e => setFormData({
    ...formData, [e.target.name]: Number(e.target.value),
  })

  useEffect(() => {
    setFormData({
      ...formData,
      ["firstAxleBKWP9"]: [formData.firstAxleP9] - (([formData.firstAxleDesingLoad]-[formData.firstAxleBKW])/2)/[formData.Rate],
      ["secondAxleBKWP9"]: [formData.secondAxleP9] - (([formData.secondAxleDesignLoad]-[formData.secondAxleBKW])/2)/[formData.Rate],
      ["firstAxleGVMP9"]: [formData.firstAxleP9] - (([formData.firstAxleDesingLoad]-[formData.firstAxleGVM])/2)/[formData.Rate],
      ["secondAxleGVMP9"]: [formData.secondAxleP9] - (([formData.secondAxleDesignLoad]-[formData.secondAxleGVM])/2)/[formData.Rate],
      ["thirdAxleBKWP9"]: [formData.rearAxleP9] - (([formData.rearAxleDesignLoad]-[formData.thirdAxleBKW]+[formData.unsprungMass])/[formData.totalRate]),
      ["fourthAxleBKWP9"]: [formData.rearAxleP9] - (([formData.rearAxleDesignLoad]-[formData.fourthAxleBKW]+[formData.unsprungMass])/[formData.totalRate]),
      ["thirdAxleGVMP9"]: [formData.rearAxleP9] - (([formData.rearAxleDesignLoad]-[formData.thirdAxleGVM]+[formData.unsprungMass])/[formData.totalRate]),
      ["fourthAxleGVMP9"]: [formData.rearAxleP9] - (([formData.rearAxleDesignLoad]-[formData.fourthAxleGVM]+[formData.unsprungMass])/[formData.totalRate])
    })
  })

  return (
    <section style={{position: 'relative'}} className = 'mainframe'>
        <p style={{position: 'absolute', top:'0', textAlign:'center'}}>
        You can calculate the P9 values marked in <b style={{color:'#28a745'}}>green</b> by entering the load values in the BKW and GVM sections marked with <b style={{color:'#17a2b8'}}>blue</b> color.
        </p>
        <table className='table-fill' >
          <thead>
            <tr>
              <th onClick={() => console.log({formData})} colSpan={4}>41XXD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='firstCol'>
                Series
              </td>
              <td colSpan={3}>
                CQ
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                CM
              </td>
              <td colSpan={3}>
                9027
              </td>
            </tr>
            <tr>
              <td className='firstCol' colSpan={2}>
                Axle
              </td>
              <td>
                1st
              </td>
              <td>
                2st
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={8}>
                Springs
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Part No
              </td>
              <td>
                EC46-5310-E
              </td>
              <td>
                EC46-5310-D
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Free Height
              </td>
              <td>
                219.5
              </td>
              <td>
                229.5
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Laden Height
              </td>
              <td>
                132
              </td>
              <td>
                142
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Clamp Height
              </td>
              <td>
                155
              </td>
              <td>
                139
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Rate
              </td>
              <td>
                {formData.Rate}
              </td>
              <td>
                {formData.Rate}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Design Load
              </td>
              <td>
                {formData.firstAxleDesingLoad}
              </td>
              <td>
                {formData.secondAxleDesignLoad}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Deflection @ DL
              </td>
              <td>
                87.5
              </td>
              <td>
                87.5
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={4}>
                Travel @ DL
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                M2M
              </td>
              <td>
                80
              </td>
              <td>
                74.05
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Jounce
              </td>
              <td>
                38.40
              </td>
              <td>
                31.05
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Rebound
              </td>
              <td>
                122.28
              </td>
              <td>
                122.28
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={5}>
                Loads
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Unsprung Mass
              </td>
              <td>
                900
              </td>
              <td>
                900
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Design Load Axle
              </td>
              <td>
                {formData.firstAxleDesingLoad}
              </td>
              <td>
                {formData.secondAxleDesignLoad}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                BKW
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
              <input style={{color:'white'}} name="firstAxleBKW" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.firstAxleBKW}></input>
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
              <input name="secondAxleBKW" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.secondAxleBKW}></input>
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                GVM
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
                <input name="firstAxleGVM" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.firstAxleGVM}></input>
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
                <input name="secondAxleGVM" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.secondAxleGVM}></input>
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={4}>
                P9
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Spring DL P9
              </td>
              <td>
                {formData.firstAxleP9}
              </td>
              <td>
                {formData.secondAxleP9}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                BKW P9
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.firstAxleBKWP9.toPrecision(5)}
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.secondAxleBKWP9.toPrecision(5)}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                GVM P9
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.firstAxleGVMP9.toPrecision(5)}
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.secondAxleGVMP9.toPrecision(5)}
              </td>
            </tr>
            <tr>
              <td className='firstCol' colSpan={2}>
                Axle
              </td>
              <td>
                3st
              </td>
              <td>
                4st
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={7}>
                Springs
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Part No
              </td>
              <td colSpan={2}>
                HC46-5560-A
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Primary Rate
              </td>
              <td>
                -
              </td>
              <td>
                -
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Total Rate
              </td>
              <td colSpan={2}>
                {formData.totalRate}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Helper Work Load
              </td>
              <td>
                -
              </td>
              <td>
                -
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Design Load
              </td>
              <td colSpan={2}>
                {formData.rearAxleDesignLoad}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Deflection @ DL
              </td>
              <td colSpan={2}>
                33.71
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={4}>
                Travel @ DL
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                M2M
              </td>
              <td>
                80
              </td>
              <td>
                74.05
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Jounce
              </td>
              <td>
                38.40
              </td>
              <td>
                31.05
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Rebound
              </td>
              <td>
                122.28
              </td>
              <td>
                122.28
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={5}>
                Loads
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Unsprung Mass
              </td>
              <td>
                1200
              </td>
              <td>
                1200
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Design Load Axle
              </td>
              <td colSpan={2}>
                {formData.rearAxleDesignLoad}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                BKW
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
              <input name="thirdAxleBKW" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.thirdAxleBKW}></input>
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
                <input name="fourthAxleBKW" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.fourthAxleBKW}></input>
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                GVM
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
                <input name="thirdAxleGVM" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.thirdAxleGVM}></input>
              </td>
              <td style={{borderColor: '#17a2b8', borderWidth: 'medium'}}>
                <input name="fourthAxleGVM" onChange={(e) => onChange(e)}className='tableInput' placeholder={formData.fourthAxleGVM}></input>
              </td>
            </tr>
            <tr>
              <td className='firstCol' rowSpan={4}>
                P9
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                Spring DL P9
              </td>
              <td colSpan={2}>
                {formData.rearAxleP9}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                BKW P9
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.thirdAxleBKWP9.toPrecision(3)}
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.fourthAxleBKWP9.toPrecision(5)}
              </td>
            </tr>
            <tr>
              <td className='firstCol'>
                GVM P9
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.thirdAxleGVMP9.toPrecision(5)}
              </td>
              <td style={{borderColor: '#28a745', borderWidth: 'medium'}}>
                {formData.fourthAxleGVMP9.toPrecision(5)}
              </td>
            </tr>
          </tbody>
        </table>
    </section>
  )
}

Dashboard.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, { setAlert })(Dashboard)
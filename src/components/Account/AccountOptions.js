/// <summary>
/// This component will take care of the user options.
/// From here the forms will be displayed for the user to change their data
/// </summary>

import React, { useState } from 'react'
import { View } from 'react-native'
import { Icon, ListItem, Text } from 'react-native-elements'
import { map } from 'lodash'

import { Modal } from '../Shared/Modal'
import { ChangeNameForm } from './changeProfileData/ChangeNameForm'
import { ChangeEmailForm } from './changeProfileData/ChangeEmailForm'
import { ChangePasswordForm } from './changeProfileData/ChangePasswordForm'

export function AccountOptions(props) {
  const { onClose, onReload } = props

  // We handle the state of the Modal of the form
  const [showModal, setShowModal] = useState(false)
  const [renderComponent, setRenderComponent] = useState(null)

  const onCloseOpenModal = () => setShowModal((prevState) => !prevState)

  const selectedComponent = (key) => {
    if (key === "displayName") { // name change
      setRenderComponent(
         <ChangeNameForm onClose={onCloseOpenModal} onReload={onReload} /> 
      ) 
    }

    if (key === "email") { // change of email
      setRenderComponent(
        <ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />
      ) 
    }

    if (key === "password") { // change of password
      setRenderComponent(<ChangePasswordForm  onClose={onCloseOpenModal}/>)
    }

    onCloseOpenModal()
  }

  const menuOptions = getMenuOptions(selectedComponent)

  return (
    <View>
      {map(menuOptions, (menu, index) => (
        <ListItem
          key={index}
          bottomDivider
          onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            tyoe={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  )
}

function getMenuOptions(selectedComponent) {
  return [  // Interface for the user to change their account details
    {
      title: "Cambiar Nombre",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password"),
    },
  ]
}

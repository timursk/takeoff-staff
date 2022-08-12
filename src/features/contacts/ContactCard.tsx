import styled from '@emotion/styled';
import { Button, InputBase, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deleteContactAsync, editContactAsync } from './contactsSlice';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  id: number;
  title: string;
};

export const ContactCard = ({ title, id }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteContactAsync({ id }));
  };

  const handleEdit = () => {
    if (isEdit) {
      dispatch(editContactAsync({ id, title: editValue }));
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <>
      <StyledPaper>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          {isEdit ? (
            <StyledInputBase
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              inputRef={(input) => input && input.focus()}
            />
          ) : (
            <TruncateDiv>
              <StyledTypography>{editValue}</StyledTypography>
            </TruncateDiv>
          )}

          <BtnsContainer>
            <Button variant="contained" onClick={handleEdit}>
              {isEdit ? 'Save' : <EditIcon />}
            </Button>

            <Button variant="outlined" color="error" onClick={handleDelete}>
              <DeleteForeverIcon />
            </Button>
          </BtnsContainer>
        </Stack>
      </StyledPaper>
    </>
  );
};

const StyledPaper = styled(Paper)`
  width: 100%;
  padding: 10px;
`;

const BtnsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledInputBase = styled(InputBase)`
  & .MuiInputBase-input {
    padding: 6px 0 5px;
  }
`;

const TruncateDiv = styled.div`
  min-width: 0;
`;

const StyledTypography = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
`;

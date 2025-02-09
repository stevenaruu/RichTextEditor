import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Document } from '../../components/interfaces/Document.interfaces';

interface DocumentState {
  documents: Document[];
  nextId: number;
}

const initialState: DocumentState = {
  documents: [
    {
      id: 0,
      title: '',
      content: '',
      isActive: true,
    }
  ],
  nextId: 1
};

export const DocumentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    ADD_DOCUMENT: (state: DocumentState) => {
      state.documents.forEach(doc => doc.isActive = false);
      const newDoc: Document = {
        id: state.nextId,
        title: '',
        content: '',
        isActive: true
      }

      state.documents.push(newDoc);
      state.nextId++;
    },
    UPDATE_DOCUMENT: (state: DocumentState, action: PayloadAction<Document>) => {
      const doc = state.documents.find(doc => doc.id === action.payload.id);
      if (doc) {
        state.documents.forEach(doc => doc.isActive = false);
        doc.title = action.payload.title;
        doc.content = action.payload.content;
        doc.isActive = action.payload.isActive;
      };
    },
    SET_ACTIVE_DOCUMENT: (state: DocumentState, action: PayloadAction<number>) => {
      const doc = state.documents.find(doc => doc.id === action.payload);
      if (doc) {
        state.documents.forEach(doc => doc.isActive = false);
        doc.isActive = true;
      };
    },
    REMOVE_DOCUMENT: (state: DocumentState, action: PayloadAction<number>) => {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
    }
  },
});

export const { ADD_DOCUMENT, UPDATE_DOCUMENT, SET_ACTIVE_DOCUMENT, REMOVE_DOCUMENT } = DocumentSlice.actions;
export const selectDocuments = (state: RootState) => state.document.documents;
export const selectDocumentById = (id: number) => (state: RootState) => state.document.documents.find(doc => doc.id === id);
export const selectActiveDocument = (state: RootState) => state.document.documents.find(doc => doc.isActive);
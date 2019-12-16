import { Injectable } from '@angular/core';
import { AppStoreModule } from './index';
import { Store, select } from '@ngrx/store';
import { MemberState, ModalTypes } from './reducers/member.reducer';
import { SetModalType, SetModalVisible } from './actions/member.actions';

@Injectable({
  providedIn: AppStoreModule
})
export class BatchActionsService {
  private memberState: MemberState;
  constructor(private store$: Store<AppStoreModule>) {
    this.store$.pipe(select('member')).subscribe(res => this.memberState = res);
  }

  controlModal(modalVisible = true, modalType = ModalTypes.Default) {
    this.store$.dispatch(SetModalType({ modalType }));
    this.store$.dispatch(SetModalVisible({ modalVisible }));
  }
}

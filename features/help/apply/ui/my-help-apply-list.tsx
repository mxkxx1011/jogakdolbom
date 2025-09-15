import { HelpApplicantDetail } from '@/entities/help';

import { useMyHelpApplyList } from '../model/use-my-help-apply-list';

import { MyHelpApplyItem } from './my-help-apply-item';

function MyHelpApplyList() {
  const { data } = useMyHelpApplyList();
  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((applicant: HelpApplicantDetail) => (
        <MyHelpApplyItem applicant={applicant} key={applicant.applicationId} />
      ))}
    </div>
  );
}

export { MyHelpApplyList };

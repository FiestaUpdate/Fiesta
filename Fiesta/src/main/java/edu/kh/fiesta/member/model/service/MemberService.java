package edu.kh.fiesta.member.model.service;

import edu.kh.fiesta.member.model.vo.Member;

public interface MemberService {

	/** �α��� ����
	 * @param inputMember
	 * @return loginMember
	 */
	Member login(Member inputMember);

	/** ȸ�� ���� ����
	 * @param inputMember
	 * @return result
	 */
	int signUp(Member inputMember);
	
	

}
